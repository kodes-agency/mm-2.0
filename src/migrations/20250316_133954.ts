import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_landing_blocks_hero_content_button_type" AS ENUM('cta', 'link');
  CREATE TYPE "public"."enum_landing_blocks_hero_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_text_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_image_text_content_has_title" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_image_text_content_has_button" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_image_text_content_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_landing_blocks_image_text_content_button_type" AS ENUM('cta', 'link');
  CREATE TYPE "public"."enum_landing_blocks_image_text_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_statistics_content_has_title" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_statistics_content_has_subtitle" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_statistics_content_has_button" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_statistics_content_button_type" AS ENUM('cta', 'link');
  CREATE TYPE "public"."enum_landing_blocks_statistics_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_pricing_content_packages_is_discounted" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_pricing_content_packages_is_most_popular" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_pricing_content_packages_button_type" AS ENUM('cta', 'link');
  CREATE TYPE "public"."enum_landing_blocks_pricing_content_has_title" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_pricing_content_has_subtitle" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_pricing_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_faqs_content_has_title" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_faqs_content_has_subtitle" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_faqs_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_highlights_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_services_content_has_title" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_services_content_has_subtitle" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_services_content_has_button" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_services_content_button_type" AS ENUM('cta', 'link');
  CREATE TYPE "public"."enum_landing_blocks_services_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_steps_content_has_title" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_steps_content_has_subtitle" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_steps_content_has_button" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_landing_blocks_steps_content_button_type" AS ENUM('cta', 'link');
  CREATE TYPE "public"."enum_landing_blocks_steps_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_blog_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_cta_content_button_type" AS ENUM('cta', 'link');
  CREATE TYPE "public"."enum_landing_blocks_cta_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_landing_blocks_review_style_style" AS ENUM('dark-purple', 'light-purple', 'blue', 'white', 'black', 'red', 'cyan', 'orange');
  CREATE TYPE "public"."enum_blogs_content_category" AS ENUM('youtube-seo', 'important-event', 'case-studie', 'web-design', 'web-dev', 'organic-seo', 'local-seo', 'brand-design');
  CREATE TYPE "public"."enum_blogs_content_featured" AS ENUM('true', 'false');
  CREATE TYPE "public"."enum_blogs_content_button_type" AS ENUM('cta', 'link');
  CREATE TYPE "public"."enum_faqs_category" AS ENUM('general', 'web-dev', 'seo', 'brand-design');
  CREATE TABLE IF NOT EXISTS "services_service_page_services_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "services_service_page_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "services_service_page_statistics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" numeric NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"slug" varchar,
  	"service_page_title" varchar NOT NULL,
  	"service_page_image_id" integer NOT NULL,
  	"service_page_description" varchar NOT NULL,
  	"service_page_cta_title" varchar NOT NULL,
  	"service_page_cta_description" varchar NOT NULL,
  	"service_page_cta_button_text" varchar NOT NULL,
  	"home_page_title" varchar NOT NULL,
  	"home_page_text" varchar NOT NULL,
  	"home_page_button_text" varchar NOT NULL,
  	"home_page_image_id" integer,
  	"home_page_image_bg_id" integer,
  	"seo_meta_title" varchar NOT NULL,
  	"seo_meta_description" varchar NOT NULL,
  	"style_highlight_color" varchar NOT NULL,
  	"style_bg_color_from" varchar NOT NULL,
  	"style_bg_color_to" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "services_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"landing_id" integer,
  	"blogs_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar NOT NULL,
  	"content_label" varchar,
  	"content_subtitle" varchar NOT NULL,
  	"content_button_type" "enum_landing_blocks_hero_content_button_type" DEFAULT 'cta',
  	"content_button_text" varchar NOT NULL,
  	"content_cta_title" varchar,
  	"content_cta_has_message" boolean DEFAULT false,
  	"content_cta_has_budget" boolean DEFAULT false,
  	"content_button_link" varchar,
  	"content_image_id" integer NOT NULL,
  	"style_style" "enum_landing_blocks_hero_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"content_text" jsonb,
  	"content_text_html" varchar,
  	"style_style" "enum_landing_blocks_text_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_has_title" "enum_landing_blocks_image_text_content_has_title" DEFAULT 'yes',
  	"content_has_button" "enum_landing_blocks_image_text_content_has_button" DEFAULT 'no',
  	"content_image_position" "enum_landing_blocks_image_text_content_image_position" DEFAULT 'left',
  	"content_title" varchar,
  	"content_text" jsonb NOT NULL,
  	"content_text_html" varchar,
  	"content_image_id" integer NOT NULL,
  	"content_button_type" "enum_landing_blocks_image_text_content_button_type" DEFAULT 'cta',
  	"content_button_text" varchar NOT NULL,
  	"content_cta_title" varchar,
  	"content_cta_has_message" boolean DEFAULT false,
  	"content_cta_has_budget" boolean DEFAULT false,
  	"content_button_link" varchar,
  	"style_style" "enum_landing_blocks_image_text_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_statistics_content_statistic" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"prefix" varchar,
  	"number" varchar NOT NULL,
  	"suffix" varchar,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_statistics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_has_title" "enum_landing_blocks_statistics_content_has_title" DEFAULT 'yes',
  	"content_has_subtitle" "enum_landing_blocks_statistics_content_has_subtitle" DEFAULT 'yes',
  	"content_has_button" "enum_landing_blocks_statistics_content_has_button" DEFAULT 'yes',
  	"content_title" varchar,
  	"content_subtitle" varchar,
  	"content_button_type" "enum_landing_blocks_statistics_content_button_type" DEFAULT 'cta',
  	"content_button_text" varchar NOT NULL,
  	"content_cta_title" varchar,
  	"content_cta_has_message" boolean DEFAULT false,
  	"content_cta_has_budget" boolean DEFAULT false,
  	"content_button_link" varchar,
  	"style_style" "enum_landing_blocks_statistics_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_pricing_content_packages_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_pricing_content_packages_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_pricing_content_packages" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_discounted" "enum_landing_blocks_pricing_content_packages_is_discounted" DEFAULT 'no',
  	"is_most_popular" "enum_landing_blocks_pricing_content_packages_is_most_popular" DEFAULT 'no',
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"regular_price" varchar NOT NULL,
  	"discounted_price" varchar,
  	"price_details" varchar,
  	"button_type" "enum_landing_blocks_pricing_content_packages_button_type" DEFAULT 'cta',
  	"button_text" varchar NOT NULL,
  	"cta_title" varchar,
  	"cta_has_message" boolean DEFAULT false,
  	"cta_has_budget" boolean DEFAULT false,
  	"button_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_has_title" "enum_landing_blocks_pricing_content_has_title" DEFAULT 'yes',
  	"content_has_subtitle" "enum_landing_blocks_pricing_content_has_subtitle" DEFAULT 'yes',
  	"content_title" varchar,
  	"content_subtitle" varchar,
  	"style_style" "enum_landing_blocks_pricing_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_has_title" "enum_landing_blocks_faqs_content_has_title" DEFAULT 'yes',
  	"content_has_subtitle" "enum_landing_blocks_faqs_content_has_subtitle" DEFAULT 'yes',
  	"content_title" varchar,
  	"content_subtitle" varchar,
  	"style_style" "enum_landing_blocks_faqs_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_highlights_content_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"style_style" "enum_landing_blocks_highlights_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_services_content_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_has_title" "enum_landing_blocks_services_content_has_title" DEFAULT 'yes',
  	"content_has_subtitle" "enum_landing_blocks_services_content_has_subtitle" DEFAULT 'yes',
  	"content_has_button" "enum_landing_blocks_services_content_has_button" DEFAULT 'yes',
  	"content_title" varchar,
  	"content_subtitle" jsonb,
  	"content_subtitle_html" varchar,
  	"content_button_type" "enum_landing_blocks_services_content_button_type" DEFAULT 'cta',
  	"content_button_text" varchar NOT NULL,
  	"content_cta_title" varchar,
  	"content_cta_has_message" boolean DEFAULT false,
  	"content_cta_has_budget" boolean DEFAULT false,
  	"content_button_link" varchar,
  	"style_style" "enum_landing_blocks_services_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_steps_content_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_has_title" "enum_landing_blocks_steps_content_has_title" DEFAULT 'yes',
  	"content_has_subtitle" "enum_landing_blocks_steps_content_has_subtitle" DEFAULT 'yes',
  	"content_has_button" "enum_landing_blocks_steps_content_has_button" DEFAULT 'yes',
  	"content_title" varchar,
  	"content_subtitle" jsonb,
  	"content_subtitle_html" varchar,
  	"content_button_type" "enum_landing_blocks_steps_content_button_type" DEFAULT 'cta',
  	"content_button_text" varchar NOT NULL,
  	"content_cta_title" varchar,
  	"content_cta_has_message" boolean DEFAULT false,
  	"content_cta_has_budget" boolean DEFAULT false,
  	"content_button_link" varchar,
  	"style_style" "enum_landing_blocks_steps_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_blog" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_style" "enum_landing_blocks_blog_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar NOT NULL,
  	"content_text" varchar NOT NULL,
  	"content_button_type" "enum_landing_blocks_cta_content_button_type" DEFAULT 'cta',
  	"content_button_text" varchar NOT NULL,
  	"content_cta_title" varchar,
  	"content_cta_has_message" boolean DEFAULT false,
  	"content_cta_has_budget" boolean DEFAULT false,
  	"content_button_link" varchar,
  	"content_image_id" integer NOT NULL,
  	"style_style" "enum_landing_blocks_cta_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing_blocks_review" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar NOT NULL,
  	"style_style" "enum_landing_blocks_review_style_style" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "landing" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"uri" varchar,
  	"category" varchar NOT NULL,
  	"seo_meta_title" varchar NOT NULL,
  	"seo_meta_description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "landing_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"faqs_id" integer,
  	"blogs_id" integer,
  	"reviews_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_content_category" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_blogs_content_category",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"content_featured" "enum_blogs_content_featured" DEFAULT 'false' NOT NULL,
  	"content_description" varchar NOT NULL,
  	"content_image_id" integer NOT NULL,
  	"content_content" jsonb NOT NULL,
  	"content_content_html" varchar,
  	"content_cta_heading" varchar,
  	"content_cta_description" varchar,
  	"content_button_type" "enum_blogs_content_button_type" DEFAULT 'cta',
  	"content_button_text" varchar NOT NULL,
  	"content_cta_title" varchar,
  	"content_cta_has_message" boolean DEFAULT false,
  	"content_cta_has_budget" boolean DEFAULT false,
  	"content_button_link" varchar,
  	"seo_meta_title" varchar NOT NULL,
  	"seo_meta_description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "reviews" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"name" varchar,
  	"text" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" "enum_faqs_category" NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL,
  	"answer_html" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "policies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"content_html" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"prefix" varchar DEFAULT 'media',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"landing_id" integer,
  	"blogs_id" integer,
  	"reviews_id" integer,
  	"faqs_id" integer,
  	"policies_id" integer,
  	"media_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "services_service_page_services_features" ADD CONSTRAINT "services_service_page_services_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_service_page_services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_service_page_services" ADD CONSTRAINT "services_service_page_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_service_page_statistics" ADD CONSTRAINT "services_service_page_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services" ADD CONSTRAINT "services_service_page_image_id_media_id_fk" FOREIGN KEY ("service_page_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services" ADD CONSTRAINT "services_home_page_image_id_media_id_fk" FOREIGN KEY ("home_page_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services" ADD CONSTRAINT "services_home_page_image_bg_id_media_id_fk" FOREIGN KEY ("home_page_image_bg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_landing_fk" FOREIGN KEY ("landing_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_hero" ADD CONSTRAINT "landing_blocks_hero_content_image_id_media_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_hero" ADD CONSTRAINT "landing_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_text" ADD CONSTRAINT "landing_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_image_text" ADD CONSTRAINT "landing_blocks_image_text_content_image_id_media_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_image_text" ADD CONSTRAINT "landing_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_statistics_content_statistic" ADD CONSTRAINT "landing_blocks_statistics_content_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_blocks_statistics"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_statistics" ADD CONSTRAINT "landing_blocks_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_pricing_content_packages_features" ADD CONSTRAINT "landing_blocks_pricing_content_packages_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_blocks_pricing_content_packages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_pricing_content_packages_services" ADD CONSTRAINT "landing_blocks_pricing_content_packages_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_blocks_pricing_content_packages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_pricing_content_packages" ADD CONSTRAINT "landing_blocks_pricing_content_packages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_pricing" ADD CONSTRAINT "landing_blocks_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_faqs" ADD CONSTRAINT "landing_blocks_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_highlights_content_highlights" ADD CONSTRAINT "landing_blocks_highlights_content_highlights_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_highlights_content_highlights" ADD CONSTRAINT "landing_blocks_highlights_content_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_blocks_highlights"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_highlights" ADD CONSTRAINT "landing_blocks_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_services_content_services" ADD CONSTRAINT "landing_blocks_services_content_services_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_services_content_services" ADD CONSTRAINT "landing_blocks_services_content_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_blocks_services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_services" ADD CONSTRAINT "landing_blocks_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_steps_content_steps" ADD CONSTRAINT "landing_blocks_steps_content_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_blocks_steps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_steps" ADD CONSTRAINT "landing_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_blog" ADD CONSTRAINT "landing_blocks_blog_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_cta" ADD CONSTRAINT "landing_blocks_cta_content_image_id_media_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_cta" ADD CONSTRAINT "landing_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_blocks_review" ADD CONSTRAINT "landing_blocks_review_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_rels" ADD CONSTRAINT "landing_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_rels" ADD CONSTRAINT "landing_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_rels" ADD CONSTRAINT "landing_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "landing_rels" ADD CONSTRAINT "landing_rels_reviews_fk" FOREIGN KEY ("reviews_id") REFERENCES "public"."reviews"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_content_category" ADD CONSTRAINT "blogs_content_category_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs" ADD CONSTRAINT "blogs_content_image_id_media_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_landing_fk" FOREIGN KEY ("landing_id") REFERENCES "public"."landing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_reviews_fk" FOREIGN KEY ("reviews_id") REFERENCES "public"."reviews"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_policies_fk" FOREIGN KEY ("policies_id") REFERENCES "public"."policies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "services_service_page_services_features_order_idx" ON "services_service_page_services_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_service_page_services_features_parent_id_idx" ON "services_service_page_services_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_service_page_services_order_idx" ON "services_service_page_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_service_page_services_parent_id_idx" ON "services_service_page_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_service_page_statistics_order_idx" ON "services_service_page_statistics" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_service_page_statistics_parent_id_idx" ON "services_service_page_statistics" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "services_service_page_service_page_image_idx" ON "services" USING btree ("service_page_image_id");
  CREATE INDEX IF NOT EXISTS "services_home_page_home_page_image_idx" ON "services" USING btree ("home_page_image_id");
  CREATE INDEX IF NOT EXISTS "services_home_page_home_page_image_bg_idx" ON "services" USING btree ("home_page_image_bg_id");
  CREATE INDEX IF NOT EXISTS "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "services_rels_order_idx" ON "services_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "services_rels_parent_idx" ON "services_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "services_rels_path_idx" ON "services_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "services_rels_landing_id_idx" ON "services_rels" USING btree ("landing_id");
  CREATE INDEX IF NOT EXISTS "services_rels_blogs_id_idx" ON "services_rels" USING btree ("blogs_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_hero_order_idx" ON "landing_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_hero_parent_id_idx" ON "landing_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_hero_path_idx" ON "landing_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_hero_content_content_image_idx" ON "landing_blocks_hero" USING btree ("content_image_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_text_order_idx" ON "landing_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_text_parent_id_idx" ON "landing_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_text_path_idx" ON "landing_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_image_text_order_idx" ON "landing_blocks_image_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_image_text_parent_id_idx" ON "landing_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_image_text_path_idx" ON "landing_blocks_image_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_image_text_content_content_image_idx" ON "landing_blocks_image_text" USING btree ("content_image_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_statistics_content_statistic_order_idx" ON "landing_blocks_statistics_content_statistic" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_statistics_content_statistic_parent_id_idx" ON "landing_blocks_statistics_content_statistic" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_statistics_order_idx" ON "landing_blocks_statistics" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_statistics_parent_id_idx" ON "landing_blocks_statistics" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_statistics_path_idx" ON "landing_blocks_statistics" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_pricing_content_packages_features_order_idx" ON "landing_blocks_pricing_content_packages_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_pricing_content_packages_features_parent_id_idx" ON "landing_blocks_pricing_content_packages_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_pricing_content_packages_services_order_idx" ON "landing_blocks_pricing_content_packages_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_pricing_content_packages_services_parent_id_idx" ON "landing_blocks_pricing_content_packages_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_pricing_content_packages_order_idx" ON "landing_blocks_pricing_content_packages" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_pricing_content_packages_parent_id_idx" ON "landing_blocks_pricing_content_packages" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_pricing_order_idx" ON "landing_blocks_pricing" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_pricing_parent_id_idx" ON "landing_blocks_pricing" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_pricing_path_idx" ON "landing_blocks_pricing" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_faqs_order_idx" ON "landing_blocks_faqs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_faqs_parent_id_idx" ON "landing_blocks_faqs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_faqs_path_idx" ON "landing_blocks_faqs" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_highlights_content_highlights_order_idx" ON "landing_blocks_highlights_content_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_highlights_content_highlights_parent_id_idx" ON "landing_blocks_highlights_content_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_highlights_content_highlights_icon_idx" ON "landing_blocks_highlights_content_highlights" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_highlights_order_idx" ON "landing_blocks_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_highlights_parent_id_idx" ON "landing_blocks_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_highlights_path_idx" ON "landing_blocks_highlights" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_services_content_services_order_idx" ON "landing_blocks_services_content_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_services_content_services_parent_id_idx" ON "landing_blocks_services_content_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_services_content_services_icon_idx" ON "landing_blocks_services_content_services" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_services_order_idx" ON "landing_blocks_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_services_parent_id_idx" ON "landing_blocks_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_services_path_idx" ON "landing_blocks_services" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_steps_content_steps_order_idx" ON "landing_blocks_steps_content_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_steps_content_steps_parent_id_idx" ON "landing_blocks_steps_content_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_steps_order_idx" ON "landing_blocks_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_steps_parent_id_idx" ON "landing_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_steps_path_idx" ON "landing_blocks_steps" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_blog_order_idx" ON "landing_blocks_blog" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_blog_parent_id_idx" ON "landing_blocks_blog" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_blog_path_idx" ON "landing_blocks_blog" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_cta_order_idx" ON "landing_blocks_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_cta_parent_id_idx" ON "landing_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_cta_path_idx" ON "landing_blocks_cta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_blocks_cta_content_content_image_idx" ON "landing_blocks_cta" USING btree ("content_image_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_review_order_idx" ON "landing_blocks_review" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "landing_blocks_review_parent_id_idx" ON "landing_blocks_review" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "landing_blocks_review_path_idx" ON "landing_blocks_review" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "landing_uri_idx" ON "landing" USING btree ("uri");
  CREATE INDEX IF NOT EXISTS "landing_updated_at_idx" ON "landing" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "landing_created_at_idx" ON "landing" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "landing_rels_order_idx" ON "landing_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "landing_rels_parent_idx" ON "landing_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "landing_rels_path_idx" ON "landing_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "landing_rels_faqs_id_idx" ON "landing_rels" USING btree ("faqs_id");
  CREATE INDEX IF NOT EXISTS "landing_rels_blogs_id_idx" ON "landing_rels" USING btree ("blogs_id");
  CREATE INDEX IF NOT EXISTS "landing_rels_reviews_id_idx" ON "landing_rels" USING btree ("reviews_id");
  CREATE INDEX IF NOT EXISTS "blogs_content_category_order_idx" ON "blogs_content_category" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "blogs_content_category_parent_idx" ON "blogs_content_category" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_slug_idx" ON "blogs" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blogs_content_content_image_idx" ON "blogs" USING btree ("content_image_id");
  CREATE INDEX IF NOT EXISTS "blogs_updated_at_idx" ON "blogs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blogs_created_at_idx" ON "blogs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "reviews_updated_at_idx" ON "reviews" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "reviews_created_at_idx" ON "reviews" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "policies_updated_at_idx" ON "policies" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "policies_created_at_idx" ON "policies" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_landing_id_idx" ON "payload_locked_documents_rels" USING btree ("landing_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("blogs_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_reviews_id_idx" ON "payload_locked_documents_rels" USING btree ("reviews_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_policies_id_idx" ON "payload_locked_documents_rels" USING btree ("policies_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "services_service_page_services_features" CASCADE;
  DROP TABLE "services_service_page_services" CASCADE;
  DROP TABLE "services_service_page_statistics" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_rels" CASCADE;
  DROP TABLE "landing_blocks_hero" CASCADE;
  DROP TABLE "landing_blocks_text" CASCADE;
  DROP TABLE "landing_blocks_image_text" CASCADE;
  DROP TABLE "landing_blocks_statistics_content_statistic" CASCADE;
  DROP TABLE "landing_blocks_statistics" CASCADE;
  DROP TABLE "landing_blocks_pricing_content_packages_features" CASCADE;
  DROP TABLE "landing_blocks_pricing_content_packages_services" CASCADE;
  DROP TABLE "landing_blocks_pricing_content_packages" CASCADE;
  DROP TABLE "landing_blocks_pricing" CASCADE;
  DROP TABLE "landing_blocks_faqs" CASCADE;
  DROP TABLE "landing_blocks_highlights_content_highlights" CASCADE;
  DROP TABLE "landing_blocks_highlights" CASCADE;
  DROP TABLE "landing_blocks_services_content_services" CASCADE;
  DROP TABLE "landing_blocks_services" CASCADE;
  DROP TABLE "landing_blocks_steps_content_steps" CASCADE;
  DROP TABLE "landing_blocks_steps" CASCADE;
  DROP TABLE "landing_blocks_blog" CASCADE;
  DROP TABLE "landing_blocks_cta" CASCADE;
  DROP TABLE "landing_blocks_review" CASCADE;
  DROP TABLE "landing" CASCADE;
  DROP TABLE "landing_rels" CASCADE;
  DROP TABLE "blogs_content_category" CASCADE;
  DROP TABLE "blogs" CASCADE;
  DROP TABLE "reviews" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "policies" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_landing_blocks_hero_content_button_type";
  DROP TYPE "public"."enum_landing_blocks_hero_style_style";
  DROP TYPE "public"."enum_landing_blocks_text_style_style";
  DROP TYPE "public"."enum_landing_blocks_image_text_content_has_title";
  DROP TYPE "public"."enum_landing_blocks_image_text_content_has_button";
  DROP TYPE "public"."enum_landing_blocks_image_text_content_image_position";
  DROP TYPE "public"."enum_landing_blocks_image_text_content_button_type";
  DROP TYPE "public"."enum_landing_blocks_image_text_style_style";
  DROP TYPE "public"."enum_landing_blocks_statistics_content_has_title";
  DROP TYPE "public"."enum_landing_blocks_statistics_content_has_subtitle";
  DROP TYPE "public"."enum_landing_blocks_statistics_content_has_button";
  DROP TYPE "public"."enum_landing_blocks_statistics_content_button_type";
  DROP TYPE "public"."enum_landing_blocks_statistics_style_style";
  DROP TYPE "public"."enum_landing_blocks_pricing_content_packages_is_discounted";
  DROP TYPE "public"."enum_landing_blocks_pricing_content_packages_is_most_popular";
  DROP TYPE "public"."enum_landing_blocks_pricing_content_packages_button_type";
  DROP TYPE "public"."enum_landing_blocks_pricing_content_has_title";
  DROP TYPE "public"."enum_landing_blocks_pricing_content_has_subtitle";
  DROP TYPE "public"."enum_landing_blocks_pricing_style_style";
  DROP TYPE "public"."enum_landing_blocks_faqs_content_has_title";
  DROP TYPE "public"."enum_landing_blocks_faqs_content_has_subtitle";
  DROP TYPE "public"."enum_landing_blocks_faqs_style_style";
  DROP TYPE "public"."enum_landing_blocks_highlights_style_style";
  DROP TYPE "public"."enum_landing_blocks_services_content_has_title";
  DROP TYPE "public"."enum_landing_blocks_services_content_has_subtitle";
  DROP TYPE "public"."enum_landing_blocks_services_content_has_button";
  DROP TYPE "public"."enum_landing_blocks_services_content_button_type";
  DROP TYPE "public"."enum_landing_blocks_services_style_style";
  DROP TYPE "public"."enum_landing_blocks_steps_content_has_title";
  DROP TYPE "public"."enum_landing_blocks_steps_content_has_subtitle";
  DROP TYPE "public"."enum_landing_blocks_steps_content_has_button";
  DROP TYPE "public"."enum_landing_blocks_steps_content_button_type";
  DROP TYPE "public"."enum_landing_blocks_steps_style_style";
  DROP TYPE "public"."enum_landing_blocks_blog_style_style";
  DROP TYPE "public"."enum_landing_blocks_cta_content_button_type";
  DROP TYPE "public"."enum_landing_blocks_cta_style_style";
  DROP TYPE "public"."enum_landing_blocks_review_style_style";
  DROP TYPE "public"."enum_blogs_content_category";
  DROP TYPE "public"."enum_blogs_content_featured";
  DROP TYPE "public"."enum_blogs_content_button_type";
  DROP TYPE "public"."enum_faqs_category";`)
}
