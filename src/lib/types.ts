// Form Types
export interface NewsletterFormData {
  email: string
}

// Site Configuration
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  socialLinks: {
    instagram?: string
    youtube?: string
  }
}
