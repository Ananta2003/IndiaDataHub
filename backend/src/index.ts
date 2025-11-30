
import express from 'express'
import dotenv from 'dotenv'
import { User } from './db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cors from 'cors'

dotenv.config()

const app = express()
const JWT_PASSWORD: any = process.env.JWT_PASSWORD
app.use(express.json())
app.use(cors())

app.post('/api/v1/signup', async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(401).json({
            message: "Please Fill all Provided Inputs"
        })
    }

    const hashlength = 10
    const hashedPassword = await bcrypt.hash(password, hashlength)

    if (!hashedPassword) {
        return res.status(501).json({
            message: "Failed Hashing Password"
        })
    }
    try {
        const data = await User.create({
            username: username,
            password: hashedPassword,
            email: email
        })

        res.status(200).json({
            message: "User Acount Created",
            data
        })
    } catch (err) {
        res.status(501).json({
            message: "Err Creating Accoun ",
            err
        })
    }

})

app.post('/api/v1/signin', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(401).json({
            message: "Please Fill all Provided Inputs"
        })
    }

    const user = await User.findOne({ username: username })

    if (!user) {
        return res.status(400).json({
            message: "No User Found "
        })
    }

    const bycryptedPassword = await bcrypt.compare(password, user.password)
    if (!bycryptedPassword) {
        return res.status(401).json({
            message: "Incorrect Password "
        })
    }

    try {
        const token = jwt.sign({
            userId: user._id
        }, JWT_PASSWORD)

        res.status(201).json({
            token
        })
    } catch (err) {
        res.status(501).json({
            message: "Failed to signup ",
            err
        })
    }
})

app.post('/api/v1/forget-password', async (req, res) => {
    const { email } = req.body

    try {
        const oldUser = await User.findOne({
            email: email
        })

        if (!oldUser) {
            return res.status(400).json({
                message: "User does not Exisit"
            })
        }
        const secret = JWT_PASSWORD + oldUser.password
        const token = jwt.sign({
            email: oldUser.email,
            id: oldUser._id
        }, secret, { expiresIn: "5m" });
        const link = `http://localhost:5173/api/v1/reset-password/${oldUser._id}/${token}`
        console.log(link)
    } catch (err) {
        res.status(501).json({
            message: "Error in backend",
            err
        })
    }
})

app.get('/api/v1/reset-password/:id/:token', async (req, res) => {
    const { id, token } = req.params

    const oldUser = await User.findOne({
        _id: id
    })

    if (!oldUser) {
        return res.status(400).json({
            message: "User does not Exisit"
        })
    }
    const secret = JWT_PASSWORD + oldUser.password
    try {
        const verify = jwt.verify(token, secret)
        res.status(201).json({
            message: "Verified"
        })
    } catch (err) {
        res.status(401).json({
            message: "Not Verified"
        })
    }
})

app.post('/api/v1/reset-password/:id/:token', async (req, res) => {
    const { id, token } = req.params
    const { newPassword } = req.body

    const oldUser = await User.findOne({ id: id })
    if (!oldUser) {
        return res.status(400).json({
            message: "User not Found"
        })
    }
    const secret = JWT_PASSWORD + oldUser.password

    try {
        jwt.verify(token, secret)

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await User.updateOne({ _id: id }, { password: hashedPassword })

        res.json({ message: "Password updated successfully" });

    }catch(err){
        res.status(401).json({ message: "Invalid token" });
    }

})


const port = process.env.PORT
app.listen(port, () => {
    console.log("Server Running on " + port)
})