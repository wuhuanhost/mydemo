require 'mongo'

mongo_client = MongoClient.new("localhost", 27017)

db = mongo_client.db("test")

coll = db.collection("testCollection")


coll.find.each_slice(10) do |slice|
  puts slice.inspect
end