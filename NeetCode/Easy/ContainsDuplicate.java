package Easy;

import java.util.HashSet;
import java.util.Set;

public class ContainsDuplicate {
    public boolean hasDuplicate(int[] nums)
    {
        Set<Integer> newSet = new HashSet<>();

        for(int num : nums)
        {
            if(newSet.contains(num))
                return true;
            else
                newSet.add(num);
        }
        return false;
    }
}
