import db, { genId } from '../../src/config/db';

const run = async () => {
  await db.post.createMany({
    data: [
        {
            id: genId(),
            slug: 'post-1',
            title: 'Post 1',
            content: 'Post 1 content',
            publishedAt: new Date(),
        },
        {
            id: genId(),
            slug: 'post-2',
            title: 'Post 4',
            content: 'Post 1 content',
            publishedAt: new Date(),
        },
        {
            id: genId(),
            slug: 'post-3',
            title: 'Post 3',
            content: 'Post 1 content',
            publishedAt: new Date(),
        },
        {
            id: genId(),
            slug: 'post-4',
            title: 'Post 4',
            content: 'Post 1 content',
            publishedAt: new Date(),
        }
    ]
  })
};

//To auto run sript
if (require.main === module) {
    run().then(() => {
        console.log('Data seed done!')
        process.exit()
    });
}