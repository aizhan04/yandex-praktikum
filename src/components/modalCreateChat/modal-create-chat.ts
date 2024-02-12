import { ErrorText, InputField } from "..";
import Block from "../../core/Block";
import { connect } from "../../utils/connect";
import template from "./modal-create-chat.hbs?raw";

interface Props {
  isOpenModalChat: boolean;
  onSave: () => void;
  onClose: () => void;
  error: string;
}

type Refs = {
  chatTitle: InputField;
  errorText: ErrorText;
};

export class ModalCreateChat extends Block<Props, Refs> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  public getChatTitle() {
    return this.refs.chatTitle.value();
  }

  public setError(error: string) {
    this.refs.errorText.setProps({ error });
  }

  protected render(): string {
    return template;
  }
}

export const withStoreModalCreateChat = connect((state) => ({
  isOpenModalChat: state.isOpenModalChat,
}))(ModalCreateChat);
