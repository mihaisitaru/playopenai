import { Component } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

import { ChatConversation, ResponseModel } from 'src/app/models/response';

@Component({
  selector: 'app-open-ai',
  templateUrl: './open-ai.component.html',
  styleUrls: ['./open-ai.component.scss'],
})
export class OpenAiComponent {
  public chatConversation: ChatConversation[] = [];
  public enteredText: string = '';
  public showSpinner: boolean = false;
  public apiKey: string = '';
  public selectedModel: string = 'text-davinci-003';
  public options = [
    { id: 'text-davinci-003', name: 'text-davinci-003' },
    { id: 'text-curie-001', name: 'text-curie-001' },
    { id: 'text-babbage-001', name: 'text-babbage-001' },
    { id: 'text-ada-001', name: 'text-ada-001' },
  ];

  private promptText: string = '';
  private response: ResponseModel | undefined;

  public onApiKeyChange(event: any): void {
    this.apiKey = event?.target?.value;
  }

  public checkResponseOnSend(): void {
    this.checkEnteredText();
  }

  public checkResponseOnEnter(event: any): void {
    if (event?.keyCode === 13) {
      this.checkEnteredText(event);
    }
  }

  public pushChatContent(
    content: string,
    person: string,
    cssClass: string
  ): void {
    const chatToPush: ChatConversation = {
      person: person,
      response: content,
      cssClass: cssClass,
    };
    this.chatConversation.push(chatToPush);
  }

  public getText(data: string): string[] {
    return data.split('\n').filter((f) => f.length > 0);
  }

  private checkEnteredText(event?: any): void {
    this.promptText = event?.target?.value || this.enteredText;
    this.enteredText = '';
    this.pushChatContent(this.promptText, 'You', 'human');
    this.invokeGPT();
  }

  private async invokeGPT(): Promise<void> {
    if (this.promptText.length < 2) return;

    try {
      this.response = undefined;
      let configuration = new Configuration({ apiKey: this.apiKey });
      let openai = new OpenAIApi(configuration);
      let requestData = {
        model: this.selectedModel, // 'text-davinci-003', 'text-curie-001', 'text-babbage-001' 'text-ada-001',
        prompt: this.promptText,
        temperature: 0.95,
        max_tokens: 150, // 4000
        top_p: 1.0,
        frequency_penalty: 2.0,
        presence_penalty: 2.0,
      };
      this.showSpinner = true;
      let apiResponse = await openai.createCompletion(requestData);

      this.response = apiResponse.data as ResponseModel;
      console.log(this.response);
      this.pushChatContent(
        this.response.choices[0].text.trim(),
        'ChatGPT',
        'chatGPT'
      );

      this.showSpinner = false;
    } catch (error: any) {
      this.showSpinner = false;
      if (error.response) {
        console.error(error.response.status, error.response.data);
      } else {
        console.error(`Error in OpenAI API request: ${error.message}`);
      }
    }
  }
}
