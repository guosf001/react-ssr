import express from 'express'

const app = express()

// 访问静态资源路径
app.use(express.static('public'))

app.listen(3000, () => {
    console.log(`app is running 3000`);
})

export default app;