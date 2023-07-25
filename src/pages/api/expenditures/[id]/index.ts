import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { expendituresValidationSchema } from 'validationSchema/expenditures';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.expenditures
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getExpendituresById();
    case 'PUT':
      return updateExpendituresById();
    case 'DELETE':
      return deleteExpendituresById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getExpendituresById() {
    const data = await prisma.expenditures.findFirst(convertQueryToPrismaUtil(req.query, 'expenditures'));
    return res.status(200).json(data);
  }

  async function updateExpendituresById() {
    await expendituresValidationSchema.validate(req.body);
    const data = await prisma.expenditures.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteExpendituresById() {
    const data = await prisma.expenditures.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
