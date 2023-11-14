import Team from "../models/Team.js"


export const createTeam = async (req, res) => {

   const{name} = req.body;

  const data = await Team.create({name});
   
   res.status(200).json(data);
}