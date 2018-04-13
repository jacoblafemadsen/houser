module.exports = {
  getAll: (req, res) => {
    console.log('im hit')
    const db = req.app.get('db')
    db.read_houses()
    .then(houses => res.status(200).send(houses))
    .catch(() => res.status(500).send())
  }
}