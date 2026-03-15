import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import * as LibSQLClient from "@libsql/client";
import path from "path";
import "dotenv/config";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Final attempt to force override the "undefined" URL issue
const ABSOLUTE_DB_PATH = path.resolve(process.cwd(), "baza.db");
const FALLBACK_URL = `file:${ABSOLUTE_DB_PATH}`;

// In some Windows environments, process.env.DATABASE_URL can be the string "undefined"
const rawUrl = process.env.DATABASE_URL;
const dbUrl = (rawUrl && rawUrl !== "undefined" && rawUrl !== "") ? rawUrl : FALLBACK_URL;

console.log("[PRISMA_FINAL_FIX] Resolved DB URL:", dbUrl);

const libsql = LibSQLClient.createClient({
    url: dbUrl,
});

const adapter = new PrismaLibSql(libsql as any);

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
        log: ["error", "warn"],
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
