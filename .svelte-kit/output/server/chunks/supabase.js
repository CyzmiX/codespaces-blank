import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://ihkvijxnjrslmwdvjegj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imloa3ZpanhuanJzbG13ZHZqZWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0MTg5MzgsImV4cCI6MjAxMzk5NDkzOH0.KTppvAMB5KWkxGc-GmqxPguETr-eMMMJIMDtJ3GrsTk");
export {
  supabase as s
};
