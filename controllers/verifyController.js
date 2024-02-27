import jwt from "jsonwebtoken"; // Used for generating JSON Web Tokens

export const verifyjwt = async (req, res) => {
    try {
        const token = req.cookies['token']

        console.log('7')
        if (!token) console.log('9') //return res.status(401).json('Unauthorized user')

        try {
            req.user = jwt.verify(token, process.env.JWT_SECRET)
            console.log('10')
            return 'authorized';

        } catch (e) {
            console.log('8')
            return null;
            //res.status(400).json('Token not valid')
        }
    } catch (e) {
        //return res.status(401).json('Unauthorized user')
        console.log(e)
        return null;
    }
}

export default verifyjwt;