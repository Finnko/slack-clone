import * as yup from 'yup';

export default (existedChannels) => (
  yup.object({
    channel: yup.string()
      .trim()
      .min(3, 'error.channelMinLength')
      .max(20, 'error.channelMaxLength')
      .required('error.required')
      .notOneOf(existedChannels, 'error.channelAlreadyExists'),
  })
);
