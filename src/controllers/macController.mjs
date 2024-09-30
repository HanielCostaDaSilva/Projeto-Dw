import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMac = async (req, res) => {
    try {
        const macs = await prisma.mac.findMany();
        return res.json(macs);
    } catch (error) {
        console.error('Erro ao buscar MACs:', error);
        return res.status(500).json({ error: "Macs Not Found" });
    }
};
