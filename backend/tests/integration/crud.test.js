const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('Testando os endpoits de usuários', () => {
  it('Testando o cadastro de um novo usuário', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const response = await chai
    .request(app)
    .post('/user/register')
    .send({
      username: 'testuser',
      password: 'testpass',
      email: 'test@test.com',
    })

    expect(response.status).to.be.equal(201);
    expect(response.body).to.
    deep.equal({ message: 'Novo usuário criado com sucesso!' });
  });
  it('Testando o cadastro dos dados pessoais do usuário', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const response = await chai
    .request(app)
    .post('/user/1/data')
    .send({
      first_name: 'testuser',
      last_name: 'test',
      age: 32,
      birth_day: '1999-01-01',
    })

    expect(response.status).to.be.equal(201);
    expect(response.body).to.
    deep.equal({ message: 'Dados do usuário testuser criados com sucesso!' });
  });
  it('Testando o leitura dos usuário existente', async () => {
    sinon.stub(connection, 'execute').resolves([{
      username: 'testuser',
      password: 'testpass',
      email: 'test@test.com',
    }]);

    const response = await chai
    .request(app)
    .get('/user')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.
    deep.equal({
      username: 'testuser',
      password: 'testpass',
      email: 'test@test.com',
    });
  });it('Testando o leitura dos dados pessoais do usuário', async () => {
    sinon.stub(connection, 'execute').resolves([{
      first_name: 'testuser',
      last_name: 'test',
      age: 32,
      birth_day: '1999-01-01'
    }]);

    const response = await chai
    .request(app)
    .get('/user')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.
    deep.equal({
      first_name: 'testuser',
      last_name: 'test',
      age: 32,
      birth_day: '1999-01-01'
    });
  });
  it('Testando o update dos dados de acesso do usuário', async () => {
    sinon.stub(connection, 'execute')
      .resolves([{ insertId: 1 }]);

    const response = await chai
    .request(app)
    .put('/user/1')
    .send({
      username: 'testuser',
      password: 'testpass',
      email: 'test@test.com',
    })

    expect(response.status).to.be.equal(200);
    expect(response.body).to.
    deep.equal({ message: `Usuário testuser atualizado com sucesso!` });
  });
  it('Testando o update dos dados pessoal do usuário', async () => {
    sinon.stub(connection, 'execute')
      .resolves([{ insertId: 1 }]);

    const response = await chai
    .request(app)
    .put('/user/1/data')
    .send({
      first_name: 'testuser',
      last_name: 'test',
      age: 32,
      birth_day: '1999-01-01',
    })

    expect(response.status).to.be.equal(200);
    expect(response.body).to.
    deep.equal({ message: `Dados atualizados com sucesso!` });
  });
  it('Testando o DELETE do cadastro de um usuário', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const response = await chai
    .request(app)
    .delete('/user/1')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.
    deep.equal({ message: 'Usuário deletado com sucesso!' });
  });
  it('Testando o DELETE dos dados pessoais de um usuário', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const response = await chai
    .request(app)
    .delete('/user/1/data')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.
    deep.equal({ message: 'Dados do usuário deletados com sucesso!' });
  });
  afterEach(sinon.restore);
});