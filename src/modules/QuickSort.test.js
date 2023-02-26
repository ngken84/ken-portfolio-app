import { render, screen } from '@testing-library/react';
import QuickSort, {QuickTreeBranch, QuickTreeItem } from './QuickSort';

test('QuickTreeItem constructor works', () => {
    var item = new QuickTreeItem({key : 1, value: 2}, 5, 6);
    expect(item.key).toBe(1);
    expect(item.value).toBe(2);
    expect(item.top).toBe(5);
    expect(item.left).toBe(6);
});

test('QuickTreeBranch constructor works', () => {
    var item = new QuickTreeItem({key : 1, value: 2}, 5, 6);
    var branch = new QuickTreeBranch(1, [item], -1, 0, false);
    expect(branch.id).toBe(1);
    expect(branch.content.length).toBe(1);
    expect(branch.parentId).toBe(-1);
    expect(branch.sorted).toBe(false);
});

test('QuickTreeBranch generateBranches works', () => {
    var item1 = new QuickTreeItem({key : 1, value: 2}, 5, 6);
    var item2 = new QuickTreeItem({key: 2, value: 1}, 5, 6);
    var item3 = new QuickTreeItem({key: 3, value: 3}, 5, 6);
    var item4 = new QuickTreeItem({key: 4, value: 0}, 5, 6);
    var item5 = new QuickTreeItem({key: 5, value: 2}, 5, 6);
    var branch = new QuickTreeBranch(0, [item1, item2, item3, item4, item5], -1, 0, false);
    var branches = branch.generateBranches(1);
    expect(branches.length).toBe(2);
    expect(branches[0].content.length).toBe(2);

    expect(branches[0].content[0].value).toBe(1);
    expect(branches[0].content[1].value).toBe(0);

    expect(branches[1].content.length).toBe(2);

    expect(branches[1].content[0].value).toBe(3);
    expect(branches[1].content[1].value).toBe(2);

});

test('QuickTreeBranch trimAllButFirst works', () => {
    var item1 = new QuickTreeItem({key : 1, value: 2}, 5, 6);
    var item2 = new QuickTreeItem({key: 2, value: 1}, 5, 6);
    var item3 = new QuickTreeItem({key: 3, value: 3}, 5, 6);
    var item4 = new QuickTreeItem({key: 4, value: 0}, 5, 6);
    var item5 = new QuickTreeItem({key: 5, value: 2}, 5, 6);
    var branch = new QuickTreeBranch(0, [item1, item2, item3, item4, item5], -1, 0, false);

    var newBranch = branch.trimAllButFirst();
    expect(newBranch.id).toBe(0);
    expect(newBranch.content.length).toBe(1);
    expect(newBranch.parentId).toBe(-1);
    expect(newBranch.level).toBe(0);
    expect(newBranch.sorted).toBe(false);
});

test('QuickTreeBranch generateMergedBranches works', () => {
    var item1 = new QuickTreeItem({key : 1, value: 5}, 5, 6);
    var item2 = new QuickTreeItem({key: 2, value: 1}, 5, 6);
    var item3 = new QuickTreeItem({key: 3, value: 3}, 5, 6);
    var item4 = new QuickTreeItem({key: 4, value: 0}, 5, 6);
    var item5 = new QuickTreeItem({key: 5, value: 4}, 5, 6);

    var branch = new QuickTreeBranch(0, [item3], -1, 0, false);

    var branchLeft = new QuickTreeBranch(1, [item4, item2], 0, 1, true);
    var branchRight = new QuickTreeBranch(2, [item5, item1], 0, 1, true);

    var mergedBranch = branch.generateMergedBranch(branchLeft, branchRight);

    expect(mergedBranch.id).toBe(0);
    expect(mergedBranch.content.length).toBe(5);

    expect(mergedBranch.content[0].value).toBe(0);
    expect(mergedBranch.content[1].value).toBe(1);
    expect(mergedBranch.content[2].value).toBe(3);
    expect(mergedBranch.content[3].value).toBe(4);
    expect(mergedBranch.content[4].value).toBe(5);

    expect(mergedBranch.parentId).toBe(-1);
    expect(mergedBranch.level).toBe(0);
    expect(mergedBranch.sorted).toBe(true);

});

test('QuickTreeBranch generateEmptyBranch works', () => {
    var item1 = new QuickTreeItem({key : 1, value: 2}, 5, 6);
    var item2 = new QuickTreeItem({key: 2, value: 1}, 5, 6);
    var item3 = new QuickTreeItem({key: 3, value: 3}, 5, 6);
    var item4 = new QuickTreeItem({key: 4, value: 0}, 5, 6);
    var item5 = new QuickTreeItem({key: 5, value: 2}, 5, 6);
    var branch = new QuickTreeBranch(0, [item1, item2, item3, item4, item5], -1, 0, true);

    var emptyBranch = branch.generateEmptyBranch();
    expect(emptyBranch.content.length).toBe(0);
    expect(emptyBranch.id).toBe(0);
    expect(emptyBranch.parentId).toBe(-1);
    expect(emptyBranch.level).toBe(0);
    expect(emptyBranch.sorted).toBe(true);
});

test('QuickTreeBranch getBranchWidth works', () => {
    var item1 = new QuickTreeItem({key : 1, value: 2}, 5, 6);
    var item2 = new QuickTreeItem({key: 2, value: 1}, 5, 6);
    var item3 = new QuickTreeItem({key: 3, value: 3}, 5, 6);
    var item4 = new QuickTreeItem({key: 4, value: 0}, 5, 6);
    var item5 = new QuickTreeItem({key: 5, value: 2}, 5, 6);
    var branch = new QuickTreeBranch(0, [item1, item2, item3, item4, item5], -1, 0, true);

    expect(branch.getBranchWidth()).toBe(25);
});

test('QuickTreeBranch genenateWithUpdatedLocationWorks', () => {
    var item1 = new QuickTreeItem({key : 1, value: 2}, 1, 0);
    var item2 = new QuickTreeItem({key: 2, value: 1}, 1, 5);
    var item3 = new QuickTreeItem({key: 3, value: 3}, 1, 10);
    var item4 = new QuickTreeItem({key: 4, value: 0}, 1, 15);
    var item5 = new QuickTreeItem({key: 5, value: 2}, 1, 20);

    var branch = new QuickTreeBranch(0, [item1, item2, item3, item4, item5], -1, 0, false);

    var updatedBranch = branch.generateWithUpdatedLocation(6, 16);
    expect(updatedBranch.id).toBe(branch.id);
    expect(updatedBranch.content.length).toBe(branch.content.length);
    expect(updatedBranch.level).toBe(branch.level);
    expect(updatedBranch.sorted).toBe(branch.sorted);
    expect(updatedBranch.parentId).toBe(branch.parentId);

    expect(updatedBranch.content[0].top).toBe('6rem');
    expect(updatedBranch.content[0].left).toBe('16rem');
    expect(updatedBranch.content[1].top).toBe('6rem');
    expect(updatedBranch.content[1].left).toBe('21rem');
    expect(updatedBranch.content[2].top).toBe('6rem');
    expect(updatedBranch.content[2].left).toBe('26rem');
    expect(updatedBranch.content[3].top).toBe('6rem');
    expect(updatedBranch.content[3].left).toBe('31rem');
    expect(updatedBranch.content[4].top).toBe('6rem');
    expect(updatedBranch.content[4].left).toBe('36rem');
    
});

test('QuickTreeBranch generateNewBranchWithUpdatedValue works', () => {
    var item1 = new QuickTreeItem({key : 1, value: 2}, 1, 0);
    var item2 = new QuickTreeItem({key: 2, value: 1}, 1, 5);
    var item3 = new QuickTreeItem({key: 3, value: 3}, 1, 10);
    var item4 = new QuickTreeItem({key: 4, value: 0}, 1, 15);
    var item5 = new QuickTreeItem({key: 5, value: 2}, 1, 34);

    const branch = new QuickTreeBranch(0, [item3, item4, item5, item1, item2], -1, 0, false);

    const newBranch = branch.generateNewBranchWithUpdatedValue(1, 20);
    

    expect(newBranch.id).toBe(branch.id);
    expect(newBranch.content.length).toBe(branch.content.length);

    expect(newBranch.content[0].value).toBe(branch.content[0].value);
    expect(newBranch.content[1].value).toBe(20);
    expect(newBranch.content[2].value).toBe(branch.content[2].value);
    expect(newBranch.content[3].value).toBe(branch.content[3].value);
    expect(newBranch.content[4].value).toBe(branch.content[4].value);

    expect(newBranch.parentId).toBe(branch.parentId);
    expect(newBranch.level).toBe(branch.level);
    expect(newBranch.sorted).toBe(branch.sorted);
});

test('QuickTreeBranch generateNewBranchWithNewValue works', () => {
    var item1 = new QuickTreeItem({key : 1, value: 2}, 1, 0);
    var item2 = new QuickTreeItem({key: 2, value: 1}, 1, 5);
    var item3 = new QuickTreeItem({key: 3, value: 3}, 1, 10);
    var item4 = new QuickTreeItem({key: 4, value: 0}, 1, 15);
    var item5 = new QuickTreeItem({key: 5, value: 2}, 1, 20);

    const branch = new QuickTreeBranch(0, [item3, item4, item5, item1, item2], -1, 0, false);

    const newBranch = branch.generateNewBranchWithNewValue(6, 1, 25);
    console.log(newBranch);
    
    expect(newBranch.id).toBe(branch.id);
    expect(newBranch.content.length).toBe(branch.content.length + 1);

    expect(newBranch.content[0].value).toBe(branch.content[0].value);
    expect(newBranch.content[1].value).toBe(branch.content[1].value);
    expect(newBranch.content[2].value).toBe(branch.content[2].value);
    expect(newBranch.content[3].value).toBe(branch.content[3].value);
    expect(newBranch.content[4].value).toBe(branch.content[4].value);
    expect(newBranch.content[5].value).toBe(0);
    expect(newBranch.content[5].key).toBe(6);

    expect(newBranch.parentId).toBe(branch.parentId);
    expect(newBranch.level).toBe(branch.level);
    expect(newBranch.sorted).toBe(branch.sorted);
});


