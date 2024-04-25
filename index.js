require('dotenv').config();
const express = require('express');
const OpenAI = require("openai");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const openai = new OpenAI({
	apiKey: ''
});

app.use(bodyParser.json());
app.use(
    "*",
    cors({
      origin: true,
      credentials: true,
    })
);

async function chatCompletion(query){
        
    const messageList = [{ role: "user", content: query }];
    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messageList,
        stream: false
    });
    const output_text = completion.choices[0].message.content;
    return output_text;
}

app.post('/api/translate', async (req, res) => {
    const { content, language } = req.body;
    const base_prompt = `Please translate the following text into [${language}]:
    [${content}]`
    const response = await chatCompletion(base_prompt);
    res.status(200).json({response:response})
});

app.post('/api/grammer-correct', async (req, res) => {
    const content = req.body.content;
    const base_prompt = `Please correct the grammar in the following passage and only return the response: 
    [${content}]`
    const response = await chatCompletion(base_prompt);
    res.status(200).json({response:response})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
