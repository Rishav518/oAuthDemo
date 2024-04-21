import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../utils/db'; // Assuming you have a utility function to connect to the database

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name } = req.body;

    // Connect to the database
    const db = await connectToDatabase();

    // Check if the user already exists in the database
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // If user doesn't exist, save the user data to the database
    try {
      await db.collection('users').insertOne({ email, name });
      return res.status(201).json({ message: 'User data saved successfully' });
    } catch (error) {
      console.error('Error saving user data:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
