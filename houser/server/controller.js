module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db')
    db.read_houses()
    .then(houses => res.status(200).send(houses))
    .catch(() => res.status(500).send())
  },
  create: (req, res) => {
    console.log('im hit')
    const db = req.app.get('db')
    const { name, address, city, rDState, zip, img, mortgage, rent } = req.body
    db.add_house([name, address, city, rDState, zip, img, mortgage, rent])
    .then(houses => res.status(200).send(houses))
    .catch(() => res.status(500).send())
  }
}