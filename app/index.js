const express = require('express')
const os = require('node:os');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/status', (req, res) => {

    const status = {
        hostname: os.hostname(),
        platform: os.platform(),
        arch: os.arch(),
        cpu_cores: os.cpus().length,
        cpu_model: os.cpus()[0].model,
        total_memory_mb: (os.totalmem() / 1024 / 1024).toFixed(2),
        free_memory_mb: (os.freemem() / 1024 / 1024).toFixed(2),
        user_info: os.userInfo()
        };

    res.json(status)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})