const addDoctor = (req, res) => {
  try {
    const { name, email, password, speciality, degree, date, working_hour } =
      req.body;
    const imageFile = req.file;
    console.log(
      { name, email, password, speciality, degree, date, working_hour },
      imageFile
    );
  } catch (error) {}
};

module.exports = addDoctor;
