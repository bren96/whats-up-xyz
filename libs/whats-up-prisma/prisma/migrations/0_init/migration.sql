-- CreateTable
CREATE TABLE "event_tag" (
    "id" SERIAL NOT NULL,
    "label" TEXT,
    "emoji" TEXT,

    CONSTRAINT "event_tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "tagIds" INTEGER[],

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventTags_AB_unique" ON "_EventTags"("A", "B");

-- CreateIndex
CREATE INDEX "_EventTags_B_index" ON "_EventTags"("B");

-- AddForeignKey
ALTER TABLE "_EventTags" ADD CONSTRAINT "_EventTags_A_fkey" FOREIGN KEY ("A") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventTags" ADD CONSTRAINT "_EventTags_B_fkey" FOREIGN KEY ("B") REFERENCES "event_tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

