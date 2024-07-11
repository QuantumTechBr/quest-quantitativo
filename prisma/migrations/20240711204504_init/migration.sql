-- CreateTable
CREATE TABLE "respostas" (
    "id" BIGSERIAL NOT NULL,
    "r1" VARCHAR,
    "r2" VARCHAR,
    "r3" VARCHAR,
    "r4" VARCHAR,
    "r5" VARCHAR,
    "r6" VARCHAR,
    "r7" VARCHAR,
    "r8" VARCHAR,
    "r9" VARCHAR,
    "r10" VARCHAR,
    "create_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "respostas_pkey" PRIMARY KEY ("id")
);
