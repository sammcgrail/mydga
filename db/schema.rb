# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150720173507) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "data_files", force: :cascade do |t|
    t.string   "name",           null: false
    t.string   "location_id"
    t.string   "transformer_id"
    t.string   "sample_id"
    t.string   "user_id",        null: false
    t.string   "csv_file"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string   "user_id",    null: false
    t.string   "name",       null: false
    t.string   "latitude"
    t.string   "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "samples", force: :cascade do |t|
    t.integer  "user_id",         null: false
    t.integer  "transformer_id",  null: false
    t.string   "date",            null: false
    t.decimal  "hydrogen",        null: false
    t.decimal  "oxygen",          null: false
    t.decimal  "nitrogen",        null: false
    t.decimal  "methane",         null: false
    t.decimal  "carbon_monoxide", null: false
    t.decimal  "ethane",          null: false
    t.decimal  "carbon_dioxide",  null: false
    t.decimal  "ethylene",        null: false
    t.decimal  "acetylene",       null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "transformers", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "location_id", null: false
    t.string   "name",        null: false
    t.string   "kind"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.boolean  "admin",                  default: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
