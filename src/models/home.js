import { Sequelize } from "sequelize";
import { db } from '@/config/db';


const Home = db.define('homes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    text_one: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    teste: {
        type: Sequelize.INTEGER,
    }
});

//criar tabela no banco
//Home.sync();

//verifica se há alguma diferença na tabela, realiza a alteração
//Home.sync({alter: true});

//Primeiro apaga a tabela e depois cria a tabela
//Home.sync({force: true});

export { Home };