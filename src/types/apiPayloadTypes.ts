export interface IContactUsPayLoad {
  cta: string;
  desc: string;
  email: string;
  form_type: string;
  is_blog_lead: boolean;
  name?: string;
  phone?: string;
  query_url: string;
  source_lead_event: string;
  source_url: string;
  url: string;
}
export interface INewSubscriberPayLoad {
  cta: string;
  name: {
    first_name: string;
    last_name: string;
  };
  phone?: string | null | undefined;
  cta_text: string;
  priority: string;
  email: string;
  url: string;
  desc: string;
  form_type: string;
  is_blog_lead: boolean;
  query_url: string;
  source_lead_event: string;
  source_page_type: string;
  source_url: string;
}

export interface INewsSubPayLoad {
  email: string;
  industry: string;
  cta: string;
  url: string;
}
