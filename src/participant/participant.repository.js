const prisma = require("../db");

const insertParticipant = async (participantData) => {
  const participant = await prisma.participant.create({
    data: {
      name: participantData.name,
      nim: participantData.nim,
      email: participantData.email,
      class: participantData.class,
      faculty: participantData.faculty,
      entry_year: participantData.entry_year,
      phone_number: participantData.phone_number,
      gender: participantData.gender,
      document: participantData.document,
    },
  });

  return participant;
};

const findParticipants = async () => {
  const participant = await prisma.participant.findMany();

  return participant;
};

const findParticipantById = async (id) => {
  const participant = await prisma.participant.findUnique({
    where: {
      id: id,
    },
  });

  return participant;
};

const editParticipant = async (id, participantData) => {
  const participant = await prisma.participant.update({
    where: {
      id: id,
    },
    data: {
      name: participantData.name,
      nim: participantData.nim,
      email: participantData.email,
      class: participantData.class,
      faculty: participantData.faculty,
      entry_year: participantData.entry_year,
      phone_number: participantData.phone_number,
      gender: participantData.gender,
      document: participantData.document,
    },
  });

  return participant;
};

const deleteParticipant = async (id) => {
  await prisma.participant.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  insertParticipant,
  findParticipants,
  findParticipantById,
  editParticipant,
  deleteParticipant,
};
