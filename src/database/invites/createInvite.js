import { prisma } from "../db";

export const createInvite = async (data) =>
  prisma.invite.create({
    data 
  });
