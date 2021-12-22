import { Request, Response } from 'express';
import { Assignment } from 'src/entity/Assignment';
import { getConnection } from 'typeorm';

const get = (_req: Request, res: Response) => {
  res.status(200).send('get :: Success request');
};

const getById = (req: Request, res: Response) => {
  const { id } = req.params;
  // console.log("Loading users from the database...");
  // const users = await connection.getRepository(Assignment).find(user);
  res.status(200).send(`${id} :: getById :: Success request`);
};

const post = async (_req: Request, res: Response) => {
  const assignment = new Assignment();
  const connection = getConnection();
  const assignmentSaved = await connection.getRepository(Assignment).save(assignment);
  res.status(201).send({data: assignmentSaved});
};

const put = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(201).send(`${id} :: put :: Success request`);
};

const remove = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(201).send(`${id} :: remove :: Success request`);
};

export default {
  get, getById, post, put, remove,
};
