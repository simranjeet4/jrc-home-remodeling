import EstimateForm from './EstimateForm';

/**
 * QuoteForm Component
 * Specialized alias of the estimate request form for quote CTAs across the site.
 */
export default function QuoteForm(props) {
  return (
    <EstimateForm
      title="Request A Free Quote"
      subtitle="Tell us about your project and we will provide a comprehensive, itemized quote."
      {...props}
    />
  );
}
