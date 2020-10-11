class HomeController {
  index (req, res) {
    res.json({ ok: 'true' })
  }
}

export default new HomeController()
