import { users, prayerRequests, type User, type InsertUser, type PrayerRequest, type InsertPrayerRequest } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createPrayerRequest(prayerRequest: InsertPrayerRequest): Promise<PrayerRequest>;
  getPrayerRequests(): Promise<PrayerRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private prayerRequests: Map<number, PrayerRequest>;
  private currentUserId: number;
  private currentPrayerId: number;

  constructor() {
    this.users = new Map();
    this.prayerRequests = new Map();
    this.currentUserId = 1;
    this.currentPrayerId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createPrayerRequest(insertPrayerRequest: InsertPrayerRequest): Promise<PrayerRequest> {
    const id = this.currentPrayerId++;
    const prayerRequest: PrayerRequest = {
      id,
      name: insertPrayerRequest.name || null,
      message: insertPrayerRequest.message,
      createdAt: new Date(),
    };
    this.prayerRequests.set(id, prayerRequest);
    return prayerRequest;
  }

  async getPrayerRequests(): Promise<PrayerRequest[]> {
    return Array.from(this.prayerRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
