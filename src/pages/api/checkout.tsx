import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => { 
    const checkoutCart = JSON.parse(req.query.cart);

    return res.json(checkoutCart);
}