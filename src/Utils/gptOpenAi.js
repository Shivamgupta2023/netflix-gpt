import OpenAI from 'openai';
import { Open_AI_Key } from './constant';

const client = new OpenAI({
  apiKey: Open_AI_Key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default client