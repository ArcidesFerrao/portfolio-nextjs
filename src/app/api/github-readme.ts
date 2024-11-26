import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const { owner, repo } = req.query;

    if (!owner || !repo) {
        return res.status(499).json({ error: ""})
    }

    const url = `https://api.github.com/repos`;
    const headers: HeadersInit = {
        'Accept': 'application/vnd.github.ve+json',
    };

    if (process.env.GITHUB_TOKEN) {
        headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            return res.status(response.status).json({ error: response.statusText });
        }

        const data = await response.json();
        const readmeContent = Buffer.from(data.content, 'base64').toString('utf-8');
        res.status(200).json({ content: readmeContent });
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch README ${error}`});
    }
}