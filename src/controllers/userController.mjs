import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('Usuário não encontrado');
        }
    } catch (err) {
        console.error('Erro ao buscar o usuário:', err);
        res.status(500).send('Erro interno do servidor');
    }
}

export const insertResult = async (req, res) => {
    const userId = req.params.id;
    const { pesquisa } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        const newHistory = await prisma.history.create({
            data: {
                entry: pesquisa, 
                userId: userId
            }
        });

        res.status(200).json(newHistory);
    } catch (error) {
        console.error('Erro ao adicionar ao histórico:', error);
        res.status(500).json({ error: "Erro ao adicionar ao histórico" });
    }
}

export const loadHistory = async (req, res) => {
    const userId = req.params.id;
    try {
        const history = await prisma.history.findMany({
            where: { userId: userId },
            orderBy: { createdAt: 'desc' } 
        });
        console.log(history)
        res.status(200).json({ history });
    } catch (error) {
        console.error('Erro ao obter o histórico do usuário:', error);
        res.status(500).json({ error: "Erro ao obter o histórico do usuário" });
    }
}