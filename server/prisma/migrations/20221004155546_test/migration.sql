-- AlterTable
CREATE SEQUENCE "item_id_seq";
ALTER TABLE "Item" ADD COLUMN     "isPinned" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "id" SET DEFAULT nextval('item_id_seq');
ALTER SEQUENCE "item_id_seq" OWNED BY "Item"."id";

-- AlterTable
CREATE SEQUENCE "total_id_seq";
ALTER TABLE "Total" ALTER COLUMN "id" SET DEFAULT nextval('total_id_seq');
ALTER SEQUENCE "total_id_seq" OWNED BY "Total"."id";

-- AlterTable
CREATE SEQUENCE "vote_id_seq";
ALTER TABLE "Vote" ALTER COLUMN "id" SET DEFAULT nextval('vote_id_seq');
ALTER SEQUENCE "vote_id_seq" OWNED BY "Vote"."id";

-- AlterTable
CREATE SEQUENCE "votes_id_seq";
ALTER TABLE "Votes" ALTER COLUMN "id" SET DEFAULT nextval('votes_id_seq');
ALTER SEQUENCE "votes_id_seq" OWNED BY "Votes"."id";
