import {PostCreateInput} from '../@generated/prisma-nestjs-graphql/post/post-create.input';
import {PostUpdateInput} from '../@generated/prisma-nestjs-graphql/post/post-update.input';
import {Injectable} from '@nestjs/common';
import {PrismaService} from '../../prisma/prisma.service';

@Injectable()
export class PostsService {
	constructor(private prisma: PrismaService) {}

	async create(createPostInput: PostCreateInput) {
		const post = await this.prisma.post.create({
			data: createPostInput,
		});
		console.log(post);
		return post;
	}

	findAll() {
		return this.prisma.post.findMany({});
	}

	findOne(id: number) {
		return `This action returns a #${id} post`;
	}

	update(updatePostInput: PostUpdateInput) {
		return `This action updates a # post`;
	}

	remove(id: number) {
		return `This action removes a #${id} post`;
	}
	async getTotal() {
		const response = await this.prisma.post.aggregate({
			_count: {
				id: true,
			},
		});
		console.log(response);
		return response._count.id;
	}
}
