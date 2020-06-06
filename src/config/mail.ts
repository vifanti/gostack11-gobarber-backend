interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'vinicius@fantinatto.com',
      name: 'Vinicius Fantinatto',
    },
  },
} as IMailConfig;
