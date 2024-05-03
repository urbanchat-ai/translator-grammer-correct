# translator-grammer-correct


This Node.js project provides two APIs for language processing using the OpenAI GPT-3.5 model. You can use these APIs to translate text into different languages and correct grammar in passages of text. The project utilizes the `dotenv`, `express`, `OpenAI`, `body-parser`, and `cors` packages.

## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/urbanchat-ai/translator-grammer-correct.git
    ```

2. Navigate into the project directory:

    ```bash
    cd translator-grammer-correct
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your OpenAI API key:

    ```plaintext
    CHATGPT_TOKEN=your-openai-api-key
    ```

### Usage

To start the server, run the following command:

```bash
npm start
