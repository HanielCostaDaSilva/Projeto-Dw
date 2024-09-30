import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; 

const prisma = new PrismaClient();
const salt = 10

export const registerUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const userExists = await prisma.user.findUnique({ where: { email } });

        if (userExists) {
            return res.status(400).json({ error: 'Email já cadastrado!' });
        }
        const hashedPassword = await bcrypt.hash(senha, salt);
        
        const newUser = await prisma.user.create({
            data: { nome, email, senha:hashedPassword },
        });

        res.status(201).json(newUser);
    } catch (err) {
        console.error('Erro ao cadastrar usuário:', err);
        res.status(500).send('Erro interno do servidor');
    }
}

export const login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Email ou senha inválidos!' });
        }

        const passwordValid = await bcrypt.compare(senha, user.senha);
        
        if (!passwordValid) {
            return res.status(401).json({ error: 'Email ou senha inválidos!' });
        }

        return res.status(200).json({ message: 'Login bem-sucedido!', userId: user.id });
        
    } catch (error) {
        console.error('Erro ao fazer login:', error);

        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
};


